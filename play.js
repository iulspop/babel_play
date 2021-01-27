import parser from "@babel/parser";

const code = `let index: number = 0;`;

const ast = parser.parse(code, {
  plugins: ["typescript"]
});

console.log(ast.program.body[0].declarations[0].id)


/*
{
  type: 'VariableDeclaration',
  declarations: [
    {
      type: 'VariableDeclarator',
      id: {
        type: 'Identifier',
        typeAnnotation: {
          type: 'TSTypeAnnotation',
          typeAnnotation: 'TSNumberKeyword'
        }
      }
    }
  ]
}
*/