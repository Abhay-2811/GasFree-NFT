import { Web3Button, useAddress } from "@thirdweb-dev/react";

const Cards = (props) =>{
    const quantity = 1;
    const address = useAddress();
    return(
        <div className="card">
            <div className="card__container">
                <img src={props.image} alt={`NFT${props.id}`} />
                <h1 className="font-link" >{props.name}</h1>
                <p>Token ID : {props.id}</p>
                <Web3Button 
                    contractAddress="0x2eAeEdF566080bc5be953C52aBdA2e54ECAC3A27" 
                    action={(contract) => {
                        console.log(contract);
                        console.log(address);
                        contract.erc1155.claim(props.id, quantity)
                    }}
                    >
                Free Mint NFT
                </Web3Button>
            </div>
        </div>
    )
} 

export default Cards;