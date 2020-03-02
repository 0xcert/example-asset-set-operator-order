import { OrderKind } from "@0xcert/ethereum-gateway";
import { AssetSetOperatorOrder } from "@0xcert/scaffold";

import {
  buildGatewayConfig,
  NetworkKind
} from "@0xcert/ethereum-metamask-provider";

export const config = {
  providerConfig: {
    requiredConfirmations: 1,
    gatewayConfig: buildGatewayConfig(NetworkKind.ROPSTEN) // ropsten config
  },
  valueLedgerId: "", // Input you own value ledger id
  assetLedgerId: "", // Input you own asset ledger id
  account1Id: "", // Input your primary metamask account Id.
  account2Id: "", // Input your secondary metamask account Id.
  signature: ""
};

export const order = {
  kind: OrderKind.ASSET_SET_OPERATOR_ORDER,
  ledgerId: config.assetLedgerId,
  owner: config.account1Id,
  operator: config.account2Id,
  isOperator: true,
  tokenTransferData: {
    ledgerId: config.valueLedgerId,
    value: "100000000000000000000"
  },
  seed: Date.now(),
  expiration: Date.now() + 86400000
} as AssetSetOperatorOrder;
