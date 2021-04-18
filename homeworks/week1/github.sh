#!/bin/bash
Login=$1
for Info in '"name"' '"bio"' '"location"' '"blog"'
do
	curl -s https://api.github.com/users/$Login | grep $Info | cut -d '"' -f 4
done
