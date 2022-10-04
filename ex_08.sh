if [ $1 = "save" ]; then
    mongoexport --db mern-pool --collection students --out backup/output.json --port 27042 2> /dev/null
    echo "Backup saved in folder backup."
elif [ $1 = "restore" ]; then
    rm -rf backup/
    echo "Database restored from folder backup."
fi