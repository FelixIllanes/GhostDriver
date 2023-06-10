import { ethers } from "ethers";
//direccion de ganache
const contractAddress = "0x93B83cf995Ca7BDe31e5Db33C0BD084650918618";
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

export const sendEther = async (amount) => {
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