# code-server-collab
Code-Server collaboration backend plugin, to interoperate with my frontend collaboration plugin [kainzpat14/code-collab](https://github.com/kainzpat14/code-collab)

*IMPORTANT*: This plugin provides an authenticated YJS-Websocket on your code-server installation, as the frontend runs locally, make sure that your reverse proxy filters any calls to /collab. 

## How to install: 

### Build from source

```shell
npm run prepare
cp target/collab ~/.local/share/code-server/plugins/collab -R
```

### Extract from tar

```shell
tar xvfz code-server-collab.tar.gz
cp ./collab ~/.local/share/code-server/plugins/collab -R
```