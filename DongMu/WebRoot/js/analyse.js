        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('maintest1'));

        // 指定图表的配置项和数据
        var option1 = {
            title: {
                text: '销售统计'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["花洒","大门","油烟机","水龙头","管子","座便器"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
        
        var myChart2 = echarts.init(document.getElementById('maintest2')); 
        option2 = {
        	    title: {
        	        text: '折线图堆叠'
        	    },
        	    tooltip: {
        	        trigger: 'axis'
        	    },
        	    legend: {
        	        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        	    },
        	    grid: {
        	        left: '3%',
        	        right: '4%',
        	        bottom: '3%',
        	        containLabel: true
        	    },
        	    toolbox: {
        	        feature: {
        	            saveAsImage: {}
        	        }
        	    },
        	    xAxis: {
        	        type: 'category',
        	        boundaryGap: false,
        	        data: ['周一','周二','周三','周四','周五','周六','周日']
        	    },
        	    yAxis: {
        	        type: 'value'
        	    },
        	    series: [
        	        {
        	            name:'邮件营销',
        	            type:'line',
        	            stack: '总量',
        	            data:[120, 132, 101, 134, 90, 230, 210]
        	        },
        	        {
        	            name:'联盟广告',
        	            type:'line',
        	            stack: '总量',
        	            data:[220, 182, 191, 234, 290, 330, 310]
        	        },
        	        {
        	            name:'视频广告',
        	            type:'line',
        	            stack: '总量',
        	            data:[150, 232, 201, 154, 190, 330, 410]
        	        },
        	        {
        	            name:'直接访问',
        	            type:'line',
        	            stack: '总量',
        	            data:[320, 332, 301, 334, 390, 330, 320]
        	        },
        	        {
        	            name:'搜索引擎',
        	            type:'line',
        	            stack: '总量',
        	            data:[820, 932, 901, 934, 1290, 1330, 1320]
        	        }
        	    ]
        	};
        myChart2.setOption(option2);
        
        
        
        
        var myChart3 = echarts.init(document.getElementById('maintest3')); 
        function getVirtulData(year) {
            year = year || '2017';
            var date = +echarts.number.parseDate(year + '-01-01');
            var end = +echarts.number.parseDate((+year + 1) + '-01-01');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time < end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 1000)
                ]);
            }
            return data;
        }



        option3 = {
            tooltip: {
                position: 'top'
            },
            visualMap: {
                min: 0,
                max: 1000,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                top: 'top'
            },

            calendar: [
            {
                range: '2017',
                cellSize: ['auto', 20]
            },
            {
                top: 260,
                range: '2016',
                cellSize: ['auto', 20]
            },
            {
                top: 450,
                range: '2015',
                cellSize: ['auto', 20],
                right: 5
            }],

            series: [{
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: getVirtulData(2017)
            }, {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data: getVirtulData(2016)
            }, {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 2,
                data: getVirtulData(2015)
            }]

        };
        myChart3.setOption(option3);
        
        var myChart4 = echarts.init(document.getElementById('maintest4')); 
        option4 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直达', selected:true},
                        {value:679, name:'营销广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],

                    data:[
                        {value:335, name:'直达'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1048, name:'百度'},
                        {value:251, name:'谷歌'},
                        {value:147, name:'必应'},
                        {value:102, name:'其他'}
                    ]
                }
            ]
        };
        myChart4.setOption(option4);
        
        var myChart5 = echarts.init(document.getElementById('maintest5')); 
        option5 = {
        	    title : {
        	        text: '某站点用户访问来源',
        	        subtext: '纯属虚构',
        	        x:'center'
        	    },
        	    tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/>{b} : {c} ({d}%)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        left: 'left',
        	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        	    },
        	    series : [
        	        {
        	            name: '访问来源',
        	            type: 'pie',
        	            radius : '55%',
        	            center: ['50%', '60%'],
        	            data:[
        	                {value:335, name:'直接访问'},
        	                {value:310, name:'邮件营销'},
        	                {value:234, name:'联盟广告'},
        	                {value:135, name:'视频广告'},
        	                {value:1548, name:'搜索引擎'}
        	            ],
        	            itemStyle: {
        	                emphasis: {
        	                    shadowBlur: 10,
        	                    shadowOffsetX: 0,
        	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
        	                }
        	            }
        	        }
        	    ]
        	};
        myChart5.setOption(option5);
