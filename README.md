# Wallet VR


https://github.com/caiogasparino/walletvr/assets/42823693/7133dd5d-de06-4745-9260-7459efb2d014


Wallet VR é um aplicativo móvel desenvolvido em React Native que permite cadastrar e gerenciar seus cartões de forma intuitiva e interativa. Com Wallet VR, você pode adicionar, visualizar e selecionar seus cartões de maneira conveniente, tudo em um ambiente de realidade virtual imersiva.

## Recursos Principais

- **Cadastro de Cartões**: Adicione seus cartões de crédito, débito, fidelidade e outros tipos diretamente no aplicativo.

- **Seleção Rápida**: Selecione o cartão desejado de forma rápida e fácil, usando controles intuitivos e gestos.

- **Navegação Simples**: Navegue pela sua coleção de cartões de forma intuitiva e interativa, como se estivesse em um mundo virtual.

- **Segurança Avançada**: Proteja seus dados sensíveis com recursos de segurança avançados.

## Requisitos de Desenvolvimento

Para iniciar o projeto Wallet VR em seu ambiente de desenvolvimento, você precisa ter o seguinte software instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes JavaScript)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

Certifique-se de seguir as instruções de configuração do ambiente de desenvolvimento fornecidas na documentação oficial do React Native.

## Como Iniciar o Projeto

Siga os passos abaixo para iniciar o projeto Wallet VR em seu ambiente de desenvolvimento:

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/seu-usuario/wallet-vr.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd wallet-vr
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Execute o aplicativo no emulador ou dispositivo:

   Para iOS:

   ```bash
   npx react-native run-ios
   ```

   Para Android:

   ```bash
   npx react-native run-android
   ```

Agora você deve ter o Wallet VR rodando no seu emulador ou dispositivo de teste.

## OBS

Para rodar o jasonServer no android talvez precise apontar o ip da rede local no lugar de localhost e rodar yarn server --host `iplocal` --port `3000`.
caso seja necessário apontar para ip da rede local, será nescessário apondar também em `services/cardService`.

### Exemplo

```bash
opção 1: "server": "json-server --watch db.json --port 3000"

opção 2: "server": "json-server --watch db.json --host 192.168.1.5 --port 3000"
```

## Contribuição

Se você deseja contribuir para o desenvolvimento do Wallet VR, fique à vontade para criar issues, enviar pull requests ou entrar em contato conosco. Estamos ansiosos para ver suas contribuições e melhorar ainda mais este projeto!

## Licença

Este projeto é licenciado sob os termos da Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

Aproveite o Wallet VR e gerencie seus cartões de forma inovadora em um ambiente de realidade virtual! Se tiver alguma dúvida ou precisar de assistência, não hesite em nos contatar.
