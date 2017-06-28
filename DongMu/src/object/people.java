package object;

//店里工作人员对象

public class people {
	private String name;  //工作人员姓名
	private String power; //工作人员权限 ；1为管理员，2为普通店员
	private  String phone; //工作人员电话
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPower() {
		return power;
	}
	public void setPower(String power) {
		this.power = power;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
}
