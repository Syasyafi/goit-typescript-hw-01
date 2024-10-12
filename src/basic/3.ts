// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

//(union type)?

let values: string | number;
values = "";
values = 12;
console.log(values);

//(literal type)

type Literal = "enable" | "disable";

let value: Literal;

value = "enable";
value = "disable";
// value = "value";s
