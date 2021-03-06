/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class Operators extends Contract {
  functions: {
    registerOperator(
      _operatorAddress: string,
      _operatorURI: string,
      _assetType: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeOperator(
      _operatorID: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    changeOperatorAddress(
      _operatorID: string,
      _newAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    acceptERC20Token(
      _operatorID: string,
      _tokenAddress: string,
      _accept: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    acceptEther(
      _operatorID: string,
      _accept: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addAssetType(
      _operatorID: string,
      _assetType: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    destroy(overrides?: TransactionOverrides): Promise<ContractTransaction>;
  };
  filters: {};
}
