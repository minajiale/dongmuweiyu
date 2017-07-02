<% 
private void button1_Click(object sender, EventArgs e)
        {
            string path = this.textBox1.Text;
            byte[] imgBytesIn = SaveImage(path);
            ShowImgByByte(imgBytesIn);
            //Parameters.Add("@Photo", SqlDbType.Binary).Value = imgBytesIn;
           
        }
        //将图片以二进制流
        public byte[] SaveImage(String path)
        {            
            FileStream fs = new FileStream(path, FileMode.Open, FileAccess.Read); //将图片以文件流的形式进行保存
            BinaryReader br = new BinaryReader(fs);
            byte[] imgBytesIn = br.ReadBytes((int)fs.Length);  //将流读入到字节数组中
            return imgBytesIn;
        }
        //现实二进制流代表的图片
        public void ShowImgByByte(byte[] imgBytesIn)
        {
            MemoryStream ms = new MemoryStream(imgBytesIn);
            pictureBox1.Image = Image.FromStream(ms);
        }
        
 
 
 
 
 #region 将图片从数据库中读取
        /// <summary>
        /// 将图片从数据库中读取
        /// </summary>
        /// <param name="xs_ID">要读取图片的学号</param>
        /// <param name="ph">pictureBox1控件名</param>
        public void get_photo(string xs_ID, PictureBox ph)//将图片从数据库中读取
        {
            byte[] imagebytes = null;
            getcon();
            SqlCommand con = new SqlCommand("select * from S_jiben where S_num='" + xs_ID + "'", link);
            SqlDataReader dr = con.ExecuteReader();
            while (dr.Read())
            {
                imagebytes =(byte[])dr.GetValue(18);
            }
            dr.Close();
            con_close();
            MemoryStream ms = new MemoryStream(imagebytes);
            Bitmap bmpt = new Bitmap(ms);
            ph.Image = bmpt; 
        }
        #endregion
        #region
        public void SaveImage(string MID, OpenFileDialog openF)//将图片以二进制存入数据库中
        {
            string strimg = openF.FileName.ToString();  //记录图片的所在路径
            FileStream fs = new FileStream(strimg, FileMode.Open, FileAccess.Read); //将图片以文件流的形式进行保存
            BinaryReader br = new BinaryReader(fs);
            byte[] imgBytesIn = br.ReadBytes((int)fs.Length);  //将流读入到字节数组中
            getcon();
            StringBuilder strSql = new StringBuilder();
            strSql.Append("update S_jiben Set xs_photo=@Photo where S_num=" + MID);
            SqlCommand cmd = new SqlCommand(strSql.ToString(), link);
            cmd.Parameters.Add("@Photo", SqlDbType.Binary).Value = imgBytesIn;
            cmd.ExecuteNonQuery();
            con_close();
        }
        #endregion
        %>