1.es5🀄️采用\uxxxx形式表示一个字符，但限于\u0000~\uFFF
es6中做了改进只要将码点放入大括号，就能正确解读该字符。

2。codePointAt方法，能够正确处理 4 个字节储存的字符
3.插入到源文件的任何换行符都是模版文本的一部分
4.在正常的表达式中嵌入值console.log('my name id'+(a+b)+'shan shan laichi')
5.var a=5;
var b=10;
console.log(`my name id${a+b}the giral is${a8b-b}.`)
6.如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。

let greeting = `\`Yo\` World!`;
7.使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);如果你不想要这个换行，可以使用trim方法消除它。
7.{}内部可以放任意的js表达式，可以进行运算和对象的饮用
8.{}内部还可以调用函数
9.如果模版字符串中的变量没有声明将报错
如let msg = `Hello, ${place}`;
10。如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法
11.如果大括号内是一个字符串，那么将字符串输出
12。const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));
