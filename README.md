# Segurança e auditoria de sistemas

A verificação do certificado está no diretório <code>/app/Controllers/Http/DomainController.js</code> dentro do método <code>store<code>.
  
As rotas devem ser utilizadas para salvar as informações relacionadas ao domínio a aplicação local após o start do server acontece no endereço <code>http://127.0.0.1:3333</code>.

## [POST] http://127.0.0.1:3333/domain
Nessa rota é necessário passar no corpo da requisição um objeto json com as propriedades uri que é o dominio que se  deseja verificar o certificado e o email da pessoa que possa receber as informações por e-mail.
<code>
{ 
"uri": "g1.globo.com",
"email" : "anilton.veigaa@gmail.com"
}
 </code>
 
 ## [GET] http://127.0.0.1:3333/domain
Essa rota retorna todos os dominios com certificados pesquisados e salvos.

ps: O banco utilizado foi o mysql e precisa configurar as variaveis de ambiente no arquivo <code>.env<c/code>, é necessario instalar o driver com <code>yarn add mysql<code>, as tabelas do banco serão inseridas pela migration domain ao rodar o comando <code>adonis migration:run</code>
