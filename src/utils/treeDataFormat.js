// 递归
function treeDataFormat(data,pid){
 // 方法一：该方法有个缺点，如果子级没有数据children返回[]。
/*
  function tree(id) {
    let arr = []
    data.filter(item => {
      return item.pid === id;
    }).forEach(item => {
            arr.push(item) */
/*arr.push({
                area_id: item.id,
                label: item.name,
                children: tree(item.id)
            })*/
           // 补充：加上 下面3行代码，子级没有数据不会加上children字段，不会返回[]，解决了原来方法一的缺点。
            /*temp = tree(item.id);
            if(temp.length > 0) {
                item.children = temp;
            }
    })
    return arr
  }
// 第一级节点的父id，是null或者0，视情况传入
  return tree(pid) 
*/
    // 方法二：子级无数据，children不会返回空数组 []，弥补了方法一
     let result = [] ;
     let temp = [];
     for(var i = 0; i < data.length; i++){
        if(data[i].pid == pid) {
			//tree需要label,新增字段
			data[i].value = data[i].regionName
			data[i].label = data[i].regionName
            result.push(data[i]);
            temp = treeDataFormat(data, data[i].id);
            if(temp.length > 0) {
                data[i].children = temp;
            }
        }
		 /* if(data[i].dangyuanlist.length>0){
			result.push(data[i].dangyuanlist);
		} */
     }
     return result;

    // 和方法二相同
/*
    let arr = [];
    let temp = [];
    data.filter(item => {
        // 创建新数组，将 符合【 item.pid === pid 】条件的元素 放入新数组中
        return item.pid === pid;
    }).forEach(item => {    
        arr.push(item);
        temp = treeDataFormat(data, item.id); // 递归
        if(temp.length > 0) {
            item.children = temp;
        }
    })  
    return arr;
*/
}
// 记得导出定义的方法
export {
    treeDataFormat
}