#!/bin/bash

cd ./src/assets/css/ || exit

COMMAND="sass"

if [ "$1" == "watch" ]; then
    COMMAND="sass --watch"
fi

for file in ./*.scss
do
    echo "Compiling \`$(basename "$file")\`..."
    $COMMAND "$file" "./$(basename "$file" .scss).css" &
done

cd ../../../

wait
