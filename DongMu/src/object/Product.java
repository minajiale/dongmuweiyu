package object;

public class Product {
	private String name;//商品名称
	private String calss;//商品分类  0为门，1为浴室用品
	private String buyprice;//进价
	private String sellprice;//卖价
	private String location;//放置地点.打算为一张带标记的图片
	private String picture;//产品图片
	private String number;//库存
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCalss() {
		return calss;
	}
	public void setCalss(String calss) {
		this.calss = calss;
	}
	public String getBuyprice() {
		return buyprice;
	}
	public void setBuyprice(String buyprice) {
		this.buyprice = buyprice;
	}
	public String getSellprice() {
		return sellprice;
	}
	public void setSellprice(String sellprice) {
		this.sellprice = sellprice;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	
}
