# pi2

## Como rodar a aplicação

### Backend

```bash
cd src/dotnet
docker build -t clinica-back .
docker run --rm -it -p 8000:8081 .
```