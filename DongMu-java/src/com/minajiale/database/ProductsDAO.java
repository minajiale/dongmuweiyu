package com.minajiale.database;
import java.util.List;
import object.Product;

public interface ProductsDAO {
	public void addProducts(Product commodity);
	public void updateProducts(Product commodity);
	public void deleteProducts(int commodityId);
	public List<Product> findAllCommodity(); //�����ѯ��Ʒ�ķ���
	public Product findCommdityById(int commodityId);// ���尴��ID��ѯ��Ʒ�ķ���
}