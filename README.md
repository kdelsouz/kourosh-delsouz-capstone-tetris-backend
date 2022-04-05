
# tetris-backend

Backend database to keep track of tetris players and their scores to be displayed to the client

## Run Locally

Clone the project

```bash
  git clone git@github.com:kdelsouz/kourosh-delsouz-capstone-tetris-backend.git
```

Go to the project directory

```bash
  cd kourosh-delsouz-capstone-backend
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```


## API Reference

#### Get scores

```http
  GET /scores
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Name of player |
| `score` | `string` | Score of player |


#### Post item

```http
  Post /scores
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | Name of player |
| `score` | `string` | Score of player |




## Feedback

If you have any feedback or questions, please reach out to me at:
* kdel2008@gmail.com
* https://www.linkedin.com/in/kdelsouz/
