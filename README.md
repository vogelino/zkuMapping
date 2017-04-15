# Mapping the ZK/U
Interactive map of the Moabiter Stadtgarten around the ZK/U (Center for Art and Urbanistic).

On this map, there are multiple layers of dimensions that you can show and hide in order to navigate through the different dimensions investigated on the field, such as sounds, zones, activities, trash repartition, etc.


![Screenshot of the interface](https://raw.githubusercontent.com/FH-Potsdam/zkuMapping/master/README.png)


### Development
To run the website clone the repo and navigate into it:
```bash
  cd zkuMapping/
```

Install the dependencies:
```bash
  yarn install
```

Start the server and watchers:
```bash
  yarnpkg run dev
```

And then open `localhost:3000`

### Deployment
To deploy, I use [now](https://zeit.co/now):
```bash
  yarnpkg run deploy
```
