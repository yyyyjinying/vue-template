const ROOTURL = "http://jiudaoapird.51ystshop.com/jiudaoapi/";
export default {
	GetUserInfo:`${ROOTURL}user/getuserinfo`,  //用户信息接口
	GetClassifyGoods:`${ROOTURL}goods/getclassifygoods`,  //商品分类及商品
	GetLocation:`${ROOTURL}user/getlocation`,	//地区列表
	GetAddressList:`${ROOTURL}user/getaddresslist`,  //所有收货地址
	AddAddress:`${ROOTURL}user/postaddress`,  //新增收货地址
	EditAddress:`${ROOTURL}user/putaddress`,  //修改收货地址
	DefaultAddress:`${ROOTURL}user/putdefaultaddress`,  //设置默认收货地址
	DeleteAddress:`${ROOTURL}user/deleteaddress`,  //删除收货地址
	GetLocation:`${ROOTURL}user/getlocation`,//地址匿解析
	GetMachineList:`${ROOTURL}goods/getmachinelist`,//通过经纬度获取附近售货机
	GetareaList:`${ROOTURL}user/getarealist`,//获取地区列表

	BatchPay:`${ROOTURL}order/batchpay`,  //批量购买接口
	CartPay:`${ROOTURL}order/cartpay`, //从购物车里支付
  CheckOut:`${ROOTURL}order/checkout`, //结算接口
  MyOrderList:`${ROOTURL}order/getmyorderlist`, //我的订单接口
	GetOrderInfo:`${ROOTURL}/order/getorderinfo`, //订单详情接口
	JsSdk:`${ROOTURL}user/getjssdksign`, //我微信js-sdk接口
}


