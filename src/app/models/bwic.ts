export class BwicInfo {
    bwicId = 0;
    cusip = '';
    position = 0;
    price = 0;
    dueDate = new Date();
    marketValue = 0;
    overDue = true;
    totalBids = 0;
    bidRank = '';
    bidMarketValue = 0;
    winner = 0
}

export interface BwicInfoResponse {
    code: number,
    msg: string,
    data: BwicInfo[]
}

export class UpdateBwicBidRequest {
    bwicId = 0;
    clientId = 0;
    bidMarketValue = 0
}

export class CancelBwicBidRequest {
    bwicId = 0;
    clientId = 0;
}