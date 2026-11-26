#!/usr/bin/env bash

set -e

echo "Fixing homepage intro animation flash..."

python - <<'PY'
from pathlib import Path

path = Path("src/features/public/hooks/useHomeHeroAnimations.ts")

if not path.exists():
    raise SystemExit(f"ERROR: Could not find {path}")

source = path.read_text(encoding="utf-8")

if 'import { useEffect } from "react";' not in source:
    raise SystemExit("ERROR: Expected React useEffect import was not found. No changes made.")

source = source.replace(
    'import { useEffect } from "react";',
    'import { useLayoutEffect } from "react";',
    1,
)

if "  useEffect(() => {" not in source:
    raise SystemExit("ERROR: Expected useEffect hook was not found. No changes made.")

source = source.replace(
    "  useEffect(() => {",
    "  useLayoutEffect(() => {",
    1,
)

path.write_text(source, encoding="utf-8")

print("Updated useHomeHeroAnimations.ts successfully.")
print("GSAP will now establish its initial states before the browser paints.")
PY

echo ""
echo "Running ESLint..."
npm run lint

echo ""
echo "Running production build..."
npm run build

echo ""
echo "Homepage intro animation fix completed."