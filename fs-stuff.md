## Create a note

- first create an object (const book = {})
- now stringify (json.stringify(book))
- next fs.writefilesync ('name of new file', our new stringify file

## Read a file and parse it

- fsreadfilesync(name of new file created above)
- make it a string (toString())
- parse it
- do something with it

## Everything needs loaded as a constant and moved along the above chain.

1. const stuff = do something
2. const another = do something with [stuff]
3. const last = do something with [another]
...and so on
