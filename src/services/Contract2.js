import { ethers } from "ethers";
//direccion de ganache
const contractAddress = "0xD6c757a060C060C323fB55bCaA9cE283eBa9f164";
const abi = [
	{
        "inputs": [],
        "name": "Transaction",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    }
]

export const sendEther2 = async (amount) => {
  try {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
   
    const signer = provider.getSigner();
    
    const contract = new ethers.Contract(contractAddress, abi, signer);
    console.log(contract)

    const transaction = await contract.Transaction({ value: ethers.utils.parseEther(amount) });
    await transaction.wait();

  } catch (error) {
    console.error("Error en la transferencia:", error);
  }
};