import ApiClient from "./generated/main.js";

export default ApiClient;

export type { AddgossipRequest, AddgossipResponse } from "./generated/addgossip";
export type { AutocleaninvoiceRequest, AutocleaninvoiceResponse } from "./generated/autocleaninvoice";
export type { CheckRequest, CheckResponse } from "./generated/check";
export type { CheckmessageRequest, CheckmessageResponse } from "./generated/checkmessage";
export type { CloseRequest, CloseResponse, Type as CloseType } from "./generated/close";
export type { ConnectRequest, ConnectResponse, Address as ConnectAddress, Type as ConnectType, Direction as ConnectDirection } from "./generated/connect";
export type { CreateinvoiceRequest, CreateinvoiceResponse, Status as CreateinvoiceStatus } from "./generated/createinvoice";
export type { CreateonionRequest, CreateonionResponse } from "./generated/createonion";
export type { DatastoreRequest, DatastoreResponse } from "./generated/datastore";
export type { DecodeRequest, DecodeResponse } from "./generated/decode";
export type { DecodepayRequest, DecodepayResponse, Extra as DecodepayExtra, Fallback as DecodepayFallback, Type as DecodepayType, Route as DecodepayRoute } from "./generated/decodepay";
export type { DeldatastoreRequest, DeldatastoreResponse } from "./generated/deldatastore";
export type { DelexpiredinvoiceRequest, DelexpiredinvoiceResponse } from "./generated/delexpiredinvoice";
export type { DelinvoiceRequest, DelinvoiceResponse, Status as DelinvoiceStatus } from "./generated/delinvoice";
export type { DelpayRequest, DelpayResponse, Payment as DelpayPayment, Status as DelpayStatus } from "./generated/delpay";
export type { DisableofferRequest, DisableofferResponse } from "./generated/disableoffer";
export type { DisconnectRequest, DisconnectResponse } from "./generated/disconnect";
export type { FeeratesRequest, FeeratesResponse, OnchainFeeEstimates as FeeratesOnchainFeeEstimates, Perkb as FeeratesPerkb, Perkw as FeeratesPerkw } from "./generated/feerates";
export type { FetchinvoiceRequest, FetchinvoiceResponse, Changes as FetchinvoiceChanges, NextPeriod as FetchinvoiceNextPeriod } from "./generated/fetchinvoice";
export type { FundchannelRequest, FundchannelResponse } from "./generated/fundchannel";
export type { FundchannelCancelRequest, FundchannelCancelResponse } from "./generated/fundchannel_cancel";
export type { FundchannelCompleteRequest, FundchannelCompleteResponse } from "./generated/fundchannel_complete";
export type { FundchannelStartRequest, FundchannelStartResponse } from "./generated/fundchannel_start";
export type { FunderupdateRequest, FunderupdateResponse, Policy as FunderupdatePolicy } from "./generated/funderupdate";
export type { FundpsbtRequest, FundpsbtResponse, Reservation as FundpsbtReservation } from "./generated/fundpsbt";
export type { GetinfoRequest, GetinfoResponse, Address as GetinfoAddress, AddressType as GetinfoAddressType, Binding as GetinfoBinding, BindingType as GetinfoBindingType } from "./generated/getinfo";
export type { GetlogRequest, GetlogResponse, Log as GetlogLog, Type as GetlogType } from "./generated/getlog";
export type { GetrouteRequest, GetrouteResponse, Route as GetrouteRoute, Style as GetrouteStyle } from "./generated/getroute";
export type { GetsharedsecretRequest, GetsharedsecretResponse } from "./generated/getsharedsecret";
export type { HelpRequest, HelpResponse, Help as HelpHelp } from "./generated/help";
export type { InvoiceRequest, InvoiceResponse } from "./generated/invoice";
export type { KeysendRequest, KeysendResponse, Status as KeysendStatus } from "./generated/keysend";
export type { ListchannelsRequest, ListchannelsResponse, Channel as ListchannelsChannel } from "./generated/listchannels";
export type { ListconfigsRequest, ListconfigsResponse, ImportantPlugin as ListconfigsImportantPlugin, Plugin as ListconfigsPlugin } from "./generated/listconfigs";
export type { ListdatastoreRequest, ListdatastoreResponse, Datastore as ListdatastoreDatastore } from "./generated/listdatastore";
export type { ListforwardsRequest, ListforwardsResponse, Forward as ListforwardsForward, Status as ListforwardsStatus } from "./generated/listforwards";
export type { ListfundsRequest, ListfundsResponse, Channel as ListfundsChannel, State as ListfundsState, Output as ListfundsOutput, Status as ListfundsStatus } from "./generated/listfunds";
export type { ListinvoicesRequest, ListinvoicesResponse, Invoice as ListinvoicesInvoice, Status as ListinvoicesStatus } from "./generated/listinvoices";
export type { ListnodesRequest, ListnodesResponse, Node as ListnodesNode } from "./generated/listnodes";
export type { ListoffersRequest, ListoffersResponse, Offer as ListoffersOffer } from "./generated/listoffers";
export type { ListpaysRequest, ListpaysResponse, Pay as ListpaysPay, Status as ListpaysStatus } from "./generated/listpays";
export type { ListpeersRequest, ListpeersResponse, Peer as ListpeersPeer, Channel as ListpeersChannel, Closer as ListpeersCloser, Feature as ListpeersFeature, Feerate as ListpeersFeerate, Funding as ListpeersFunding, Htlc as ListpeersHtlc, Direction as ListpeersDirection, Inflight as ListpeersInflight, State as ListpeersState, StateChange as ListpeersStateChange, Cause as ListpeersCause, Log as ListpeersLog, Type as ListpeersType } from "./generated/listpeers";
export type { ListsendpaysRequest, ListsendpaysResponse, Payment as ListsendpaysPayment, Status as ListsendpaysStatus } from "./generated/listsendpays";
export type { ListtransactionsRequest, ListtransactionsResponse, Transaction as ListtransactionsTransaction, Input as ListtransactionsInput, Type as ListtransactionsType, Output as ListtransactionsOutput } from "./generated/listtransactions";
export type { MultifundchannelRequest, MultifundchannelResponse, ChannelID as MultifundchannelChannelID, Failed as MultifundchannelFailed, Error as MultifundchannelError, Method as MultifundchannelMethod } from "./generated/multifundchannel";
export type { MultiwithdrawRequest, MultiwithdrawResponse } from "./generated/multiwithdraw";
export type { NotificationsRequest, NotificationsResponse } from "./generated/notifications";
export type { OfferRequest, OfferResponse } from "./generated/offer";
export type { OfferoutRequest, OfferoutResponse } from "./generated/offerout";
export type { OpenchannelAbortRequest, OpenchannelAbortResponse } from "./generated/openchannel_abort";
export type { OpenchannelBumpRequest, OpenchannelBumpResponse } from "./generated/openchannel_bump";
export type { OpenchannelInitRequest, OpenchannelInitResponse } from "./generated/openchannel_init";
export type { OpenchannelSignedRequest, OpenchannelSignedResponse } from "./generated/openchannel_signed";
export type { OpenchannelUpdateRequest, OpenchannelUpdateResponse } from "./generated/openchannel_update";
export type { ParsefeerateRequest, ParsefeerateResponse } from "./generated/parsefeerate";
export type { PayRequest, PayResponse, Status as PayStatus } from "./generated/pay";
export type { PingRequest, PingResponse } from "./generated/ping";
export type { PluginRequest, PluginResponse, Command as PluginCommand } from "./generated/plugin";
export type { ReserveinputsRequest, ReserveinputsResponse, Reservation as ReserveinputsReservation } from "./generated/reserveinputs";
export type { SendcustommsgRequest, SendcustommsgResponse } from "./generated/sendcustommsg";
export type { SendinvoiceRequest, SendinvoiceResponse, Status as SendinvoiceStatus } from "./generated/sendinvoice";
export type { SendonionRequest, SendonionResponse, Status as SendonionStatus } from "./generated/sendonion";
export type { SendonionmessageRequest, SendonionmessageResponse } from "./generated/sendonionmessage";
export type { SendpayRequest, SendpayResponse, Status as SendpayStatus } from "./generated/sendpay";
export type { SendpsbtRequest, SendpsbtResponse } from "./generated/sendpsbt";
export type { SetchannelfeeRequest, SetchannelfeeResponse, Channel as SetchannelfeeChannel } from "./generated/setchannelfee";
export type { SignmessageRequest, SignmessageResponse } from "./generated/signmessage";
export type { SignpsbtRequest, SignpsbtResponse } from "./generated/signpsbt";
export type { StopRequest, StopResponse } from "./generated/stop";
export type { TxdiscardRequest, TxdiscardResponse } from "./generated/txdiscard";
export type { TxprepareRequest, TxprepareResponse } from "./generated/txprepare";
export type { TxsendRequest, TxsendResponse } from "./generated/txsend";
export type { UnreserveinputsRequest, UnreserveinputsResponse, Reservation as UnreserveinputsReservation } from "./generated/unreserveinputs";
export type { UtxopsbtRequest, UtxopsbtResponse, Reservation as UtxopsbtReservation } from "./generated/utxopsbt";
export type { WaitanyinvoiceRequest, WaitanyinvoiceResponse, Status as WaitanyinvoiceStatus } from "./generated/waitanyinvoice";
export type { WaitblockheightRequest, WaitblockheightResponse } from "./generated/waitblockheight";
export type { WaitinvoiceRequest, WaitinvoiceResponse, Status as WaitinvoiceStatus } from "./generated/waitinvoice";
export type { WaitsendpayRequest, WaitsendpayResponse, Status as WaitsendpayStatus } from "./generated/waitsendpay";
export type { WithdrawRequest, WithdrawResponse } from "./generated/withdraw";
