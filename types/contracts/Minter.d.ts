/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class Minter extends Contract {
  functions: {
    mintAssetTokens(
      _assetAddress: string,
      _receiver: string,
      _amount: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    stopMint(
      _assetAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };
  filters: {};
}
