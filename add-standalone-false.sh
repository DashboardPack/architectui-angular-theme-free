#!/bin/bash

echo "Adding standalone: false to all components..."

# Find all component files
find src/app -name "*.component.ts" -type f | while read file; do
  # Check if the file already has standalone: false
  if ! grep -q "standalone: false" "$file"; then
    # Check if it has a templateUrl (common pattern)
    if grep -q "templateUrl:" "$file"; then
      # Add standalone: false after templateUrl
      sed -i '' '/templateUrl:/a\
  standalone: false,' "$file"
      echo "Updated: $file"
    elif grep -q "template:" "$file"; then
      # Add standalone: false after template
      sed -i '' '/template:/a\
  standalone: false,' "$file"
      echo "Updated: $file"
    fi
  fi
done

echo "Done! All components should now have standalone: false"