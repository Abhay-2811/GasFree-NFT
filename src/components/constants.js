export const gasTankCA = "0x00cb2fBCB3b692edc25F4b049B711f3f059f690b"

export const gasTankABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "CA",
				"type": "address"
			}
		],
		"name": "AddGas",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "client",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "CA",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawGas",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addToGas",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]