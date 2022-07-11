import { useMoralis } from 'react-moralis'


export const serverUrl = "https://fgobknghleyp.usemoralis.com:2053/server";
export const appId = "b6IxjhUZhcj7B3Y1TxRcyKGVPqICIlr4rDVVlTZ4";

export const Moralis = () => {
  const { authenticate, authError } = useMoralis();
  return authenticate;
};
  
  export default Moralis;
  
  //   const login = async () => {
  //     let user = await Moralis.Web3.autheticate()
  //     if (user) {
  //       await authenticate({ provider: "walletconnect" })
  //         .then(function (user) {
  //           console.log(user.get("ethAddress"));
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //   };