export const MIDEN_ID_CONTRACT_ADDRESS = '0xa57d6b12bebc6671339efefba10417';
// Block at which the registry contract was created. Used as the lower bound for
// on-chain note lookups (e.g. the Reclaim scan) — there can be no register-notes
// before this block, so scanning earlier is wasted work.
export const MIDEN_ID_CONTRACT_CREATION_BLOCK = 268698;
export const MIDEN_FAUCET_CONTRACT_ADDRESS = '0x2458e5446128e6b150b75b8ebd9ce1';
export const MIDEN_FAUCET_ID_BECH32 = 'mtst1aqj93e2yvy5wdv2skadca0vuuypfnp80_qr7qqq9wr6w';
export const API_BASE = 'https://midenid-backend.onrender.com';
// Guardian (PSM) operator endpoint for guardian-protected (multisig) accounts.
// Must match the operator the wallet registered the account with, or the
// multisig load() fails. There is no on-chain way to discover it, so it is
// pinned here (OpenZeppelin's operator) alongside the other network addresses.
export const MIDEN_GUARDIAN_ENDPOINT = 'https://guardian.openzeppelin.com';
// 5 * 1024 * 1024 = 5 MB
export const MAX_FILE_SIZE = 5 * 1024 * 1024;
