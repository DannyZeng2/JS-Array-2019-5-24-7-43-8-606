// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(a instanceof Array)
console.log(b instanceof Array)


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
var b = a.map(function(item,index,a) {
	return item*2
})
console.log(b);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.toString().replace(/,/g," "));
console.log(colors.toString().replace(/,/g,"+"));
console.log(colors.toString())


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a,b){
	return b-a;
})
console.log(a);

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
a.sort();
console.log(a);
var maxCount = 0;
var count = 0;
var element = a[0];
maxElement = a[0];
for(var i=1;i<=a.length;i++){
	count++;
	if(a[i-1] != a[i]){
		if (count>maxCount) {
			maxElement = a[i-1];
			maxCount = count;
		}	
		count = 0;
	}
}
console.log(maxElement+"---"+maxCount)
