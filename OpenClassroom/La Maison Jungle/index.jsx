<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>La maison jungle</title>
</head>

<body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
        function MyHeader() { 
            return(<h1>La Maison Jungle</h1>) 
        } 
        function Description() { 
            return(<p>Ici achetez toutes les plantes dont vous avez toujours rêvé </p>) 
        } 
        ReactDOM.render(<MyHeader />, document.getElementById("root"))
    </script>
</body>

</html>