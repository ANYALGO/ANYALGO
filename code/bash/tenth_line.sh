#!/bin/bash
sed -n '10p' file.txt
awk 'NR==10' file.txt
head -n10 file.txt |tail -1
