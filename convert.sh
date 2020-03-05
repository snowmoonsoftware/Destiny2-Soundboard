for i in ogg/cayde/*.ogg; do ffmpeg -i "$i" "${i%.*}.mp3"; done
for i in ogg/drifter/*.ogg; do ffmpeg -i "$i" "${i%.*}.mp3"; done
