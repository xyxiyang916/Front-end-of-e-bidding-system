export interface UserInfo {
    id: number,
    name: string,
    assetValue: number
}

export interface UserInfoResponse {
    code: number,
    msg: string,
    data: UserInfo
}