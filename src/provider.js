import { MoodContractABI,MoodContractAddress } from "./config.js";
import {ethers} from "ethers"

const chainId = 11155111
const provider = new ethers.providers.Web3Provider(window.ethereum, chainId);

// const [moodContract,setMoodContract] = useState("")

const signerPromise = provider.send('eth_requestAccounts', []).then(() => {
    return provider.getSigner();
  });
  
  const contract = new ethers.Contract(MoodContractAddress, MoodContractABI, provider);
  
  export const MoodContract = {
    setMood: async (mood) => {
      const signer = await signerPromise;
      const contractWithSigner = contract.connect(signer);
      return contractWithSigner.setMood(mood);
    },
    getMood: async () => {
      return contract.getMood();
    }
  }
/*
the MoodContract is returning a promise, but whenever i console logged MoodContract.setMood()
or MoodContract.getMood() the function is showing undefined 

Not able to find the reason as of now


*/