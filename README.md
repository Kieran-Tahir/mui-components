# `MUI components for your React App`

## SETUP 

- `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`
- `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### If you want to use these components in a seperate project:
- Copy the contents of the `mui-node-modules` folder into the `node_modules` folder of your project.
- In the name of space-saving, the `mui-node-modules` folder has not been pushed to GitHub. To retrieve these folders you will need to clone the `@mui` & `@emotion` node modules.

## Importing all components

```
import {
  Container, Grid, Box, Button, IconButton, TextField,
  Checkbox, Radio, Switch, FormControl, AppBar, BottomNavigation,
  Drawer, Tabs, Tab, Paper, Card, Accordion, AccordionSummary,
  AccordionDetails, CircularProgress, LinearProgress, Snackbar,
  Alert, Avatar, Badge, Chip, List, ListItem, Table, TableBody,
  TableCell, TableHead, TableRow, Typography, Tooltip, Modal
} from '@mui/material';
import {AddIcon, DeleteIcon} from '@mui/icons-material/Add';
```

If you want to customise your components, use the `sx` prop. For example:
```
<Button sx={{ color="black" }}>Click here!</Button>
```
Follow this link for more info on customisation:
- `https://mui.com/material-ui/customization/how-to-customize/#the-sx-prop`

### Core Components and their Variants

#### Layout

- **Container**
  - Variants: `fixed`, `maxWidth`
  
- **Grid**
  - Options: `container`, `item`, `spacing`, `direction`, `justify`, `alignItems`

- **Box**
  - Options: `m`, `p`, `border`, `color`, `bgcolor`

#### Inputs

- **Button**
  - Variants: `text`, `outlined`, `contained`
  - Options: `color`, `size`, `disabled`

- **IconButton**
  - Options: `color`, `size`, `disabled`
  
- **TextField**
  - Variants: `standard`, `outlined`, `filled`
  - Options: `multiline`, `size`

- **Checkbox**
  - Options: `checked`, `disabled`, `indeterminate`

- **Radio**
  - Options: `checked`, `disabled`

- **Switch**
  - Options: `checked`, `disabled`

- **FormControl**
  - Options: `variant`, `margin`, `fullWidth`

#### Navigation

- **AppBar**
  - Options: `position`, `color`
  
- **BottomNavigation**
  - Options: `value`, `showLabels`

- **Drawer**
  - Variants: `permanent`, `persistent`, `temporary`
  
- **Tabs**
  - Options: `value`, `variant`, `indicatorColor`, `textColor`

- **Tab**
  - Options: `label`, `icon`, `disabled`

#### Surfaces

- **Paper**
  - Options: `elevation`, `square`, `variant`

- **Card**
  - Options: `raised`

- **Accordion**
  - Options: `expanded`, `disabled`

#### Feedback

- **CircularProgress**
  - Options: `size`, `thickness`, `value`

- **LinearProgress**
  - Options: `variant`, `value`

- **Snackbar**
  - Options: `open`, `autoHideDuration`

- **Alert**
  - Variants: `filled`, `outlined`, `standard`
  - Options: `severity`

#### Data Display

- **Avatar**
  - Options: `alt`, `src`, `variant`

- **Badge**
  - Options: `badgeContent`, `color`, `variant`

- **Chip**
  - Options: `label`, `color`, `variant`, `clickable`

- **List**
  - Options: `dense`
  
- **ListItem**
  - Options: `button`, `divider`, `selected`

- **Table**
  - Options: `size`, `stickyHeader`

#### Utils

- **Typography**
  - Variants: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `caption`, `button`, `overline`
  
- **Tooltip**
  - Options: `title`, `placement`

- **Modal**
  - Options: `open`

### Icons

- **AddIcon**
- **DeleteIcon**

