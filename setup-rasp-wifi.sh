#!/bin/bash
# This sets up the wifi network on a local bash script on OSX

SSID=$(/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | awk '/ SSID/ {print substr($0, index($0, $2))}');

echo "We're going to set up your raspberry pi to connect to your wpa2 wifi";
echo "First, what is the SD Card address for the RPi Linux image? (eg Disk1)";
read IMAGE_DISK;

echo "Your current wifi is $SSID";
echo "What's the password for that wifi network?"
read WIFI_PASS;

# PATH="/dev/$IMAGE_DISK/etc/network/interfaces"

PATH='./file'

echo "auto lo" > $PATH;
echo "iface lo inet loopback" >> $PATH;
echo "iface eth0 inet dhcp" >> $PATH;
echo "auto wlan0" >> $PATH;
echo "allow-hotplug wlan0" >> $PATH;
echo "iface wlan0 inet dhcp" >> $PATH;

echo "wpa-ssid "$CURRENT_SSID"" >> $PATH;
echo "wpa-psk "$WIFI_PASS"" >> $PATH;

exit 