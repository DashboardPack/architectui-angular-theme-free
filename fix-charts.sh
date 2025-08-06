#!/bin/bash

echo "Fixing Chart.js v4 API issues..."

# Fix scale configuration - change array syntax to object syntax
find src -name "*.ts" -type f -exec sed -i '' \
  -e 's/scales: {x: \[\({}\)\], y: \[\({}\)\]}/scales: {x: {}, y: {}}/g' \
  -e 's/scales: { x: \[\({}\)\], y: \[\({}\)\] }/scales: {x: {}, y: {}}/g' \
  -e 's/x: \[\({}\)\]/x: {}/g' \
  -e 's/y: \[\({}\)\]/y: {}/g' \
  {} \;

# Fix specific scale configurations
find src -name "*.ts" -type f -exec sed -i '' \
  -e 's/x: \[{}\],/x: {},/g' \
  -e 's/y: \[$/y: {/g' \
  -e 's/^\s*{\s*$/    y0: {/g' \
  -e 's/id: '\''y-axis-0'\'',/type: '\''linear'\'',/g' \
  -e 's/id: '\''y-axis-1'\'',/type: '\''linear'\'',/g' \
  {} \;

# Remove Color imports and usage
find src -name "*.ts" -type f -exec sed -i '' \
  -e '/import.*Color.*from.*ng2-charts/d' \
  -e 's/public lineChartColors: Color\[\] = .*/\/\/ Colors now configured in dataset/g' \
  -e 's/public lineChartColors = .*/\/\/ Colors now configured in dataset/g' \
  {} \;

# Fix Label imports - just remove them as they're now string[]
find src -name "*.ts" -type f -exec sed -i '' \
  -e 's/import.*{.*Label.*}.*from.*'\''ng2-charts'\'';/\/\/ Label type removed in ng2-charts v6/g' \
  -e 's/: Label\[\]/: string[]/g' \
  {} \;

# Fix MultiDataSet and SingleDataSet
find src -name "*.ts" -type f -exec sed -i '' \
  -e 's/import.*{.*MultiDataSet.*}.*from.*'\''ng2-charts'\'';/\/\/ MultiDataSet removed/g' \
  -e 's/import.*{.*SingleDataSet.*}.*from.*'\''ng2-charts'\'';/\/\/ SingleDataSet removed/g' \
  -e 's/: MultiDataSet/: number[][]/g' \
  -e 's/: SingleDataSet/: number[]/g' \
  {} \;

# Fix NgbPanelChangeEvent
find src -name "*.ts" -type f -exec sed -i '' \
  -e 's/NgbPanelChangeEvent/any\/\/ NgbPanelChangeEvent/g' \
  {} \;

# Fix pie chart label arrays
find src -name "*.ts" -type f -exec sed -i '' \
  -e "s/\[\['Download', 'Sales'\], \['In', 'Store', 'Sales'\], 'Mail Sales'\]/['Downloads', 'In Store Sales', 'Mail Sales']/g" \
  {} \;

# Fix legend configuration
find src -name "*.ts" -type f -exec sed -i '' \
  -e 's/legend: {/plugins: { legend: {/g' \
  {} \;

echo "Chart fixes applied!"