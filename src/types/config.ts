import { Castable, cast, element } from '@bitr/castable';
import { CashMarginType } from './index';

export class BrokerConfig extends Castable {
  @cast broker: string;
  @cast npmPath?: string;
  @cast enabled: boolean;
  @cast key: string;
  @cast secret: string;
  @cast maxLongPosition: number;
  @cast maxShortPosition: number;
  @cast cashMarginType: CashMarginType;
  @cast leverageLevel: number;
  @cast commissionPercent: number;
}

export class SlackConfig extends Castable {
  @cast enabled: boolean;
  @cast url: string;
  @cast channel: string;
  @cast username: string;
  @cast
  @element(String)
  keywords: string[];
}

export class LineConfig extends Castable {
  @cast enabled: boolean;
  @cast token: string;
  @cast
  @element(String)
  keywords: string[];
}

export class LoggingConfig extends Castable {
  @cast slack: SlackConfig;
  @cast line: LineConfig;
}

export class OnSingleLegConfig extends Castable {
  @cast action: 'Cancel' | 'Reverse' | 'Proceed';
  @cast actionOnExit: 'Cancel' | 'Reverse' | 'Proceed';
  @cast options: CancelOption | ReverseOption | ProceedOption;
}

export type CancelOption = {};

export class ReverseOption extends Castable {
  @cast limitMovePercent: number;
  @cast ttl: number;
}

export class ProceedOption extends Castable {
  @cast limitMovePercent: number;
  @cast ttl: number;
}

export class ConfigRoot extends Castable {
  @cast language: string;
  @cast demoMode: boolean;
  @cast priceMergeSize: number;
  @cast maxSize: number;
  @cast minSize: number;
  @cast minTargetProfit: number;
  @cast minExitTargetProfit: number;
  @cast minTargetProfitPercent: number;
  @cast minExitTargetProfitPercent: number;
  @cast maxTargetProfit: number;
  @cast maxTargetProfitPercent: number;
  @cast maxTargetVolumePercent: number;
  @cast iterationInterval: number;
  @cast positionRefreshInterval: number;
  @cast sleepAfterSend: number;
  @cast maxNetExposure: number;
  @cast maxRetryCount: number;
  @cast orderStatusCheckInterval: number;
  @cast onSingleLeg: OnSingleLegConfig;
  @cast
  @element(BrokerConfig)
  brokers: BrokerConfig[];
  @cast logging: LoggingConfig;
}