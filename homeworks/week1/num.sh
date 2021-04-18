#!/bin/bash
if [ "$1" -gt 0 ];then 
for ((i=1; i<=$1; i=i+1))
do
	touch $i.js
done
exit 0
fi
echo "Please enter a number greater than 0"
exit 1
