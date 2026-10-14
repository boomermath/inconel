#!/bin/bash
set -euo pipefail

mode="${1:-all}"

start_proxy() {
  cd /opt/hammerhead
  exec node node_modules/gulp/bin/gulp http-playground --no-build
}

if [[ "$mode" == "proxy" ]]; then
  start_proxy
fi

if [[ "$mode" != "all" ]]; then
  echo "Unknown mode: $mode (use all or proxy)" >&2
  exit 1
fi

cd /opt/hammerhead
node node_modules/gulp/bin/gulp http-playground --no-build &
hammerhead_pid=$!

cd /app
node node_modules/next/dist/bin/next start --hostname 0.0.0.0 --port "${PORT:-3000}" &
next_pid=$!

shutdown() {
  kill "$hammerhead_pid" "$next_pid" 2>/dev/null || true
  wait "$hammerhead_pid" "$next_pid" 2>/dev/null || true
}
trap shutdown INT TERM

wait -n "$hammerhead_pid" "$next_pid"
status=$?
shutdown
exit "$status"
