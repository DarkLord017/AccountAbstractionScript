import { ethers } from 'ethers';
//import abi from './ZapAccount.json';

async function generateCallDataForLikedPost(postId) {
    const iface = new ethers.Interface([' function likePost(uint256 postId) public']);
    return iface.encodeFunctionData('likePost', [postId]);
 }

 async function generateCallData(dest, value, id) {
    const data = await generateCallDataForLikedPost(id);
   const iface = new ethers.Interface([' function execute(address dest, uint256 value, bytes data) external']);
   return iface.encodeFunctionData('execute', [dest, value, data]);
}

 async function main() {
    const dest = '0x2462aa4843e54a28957CEDdfB33d98f38C5cC6CC';
    const value = 0;
    const postId = 0;
    const callData = await generateCallData(dest, value, postId);
    console.log(callData);
 }

 main();