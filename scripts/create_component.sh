echo "Verifing bash version..."
bversion=`bash -c 'echo $BASH_VERSION'`
bversion=${bversion:0:1}

if [[ $bversion -ge 4 ]]; then
  echo "version ok"

  ####################################
  ########### Introduction ###########
  ####################################
  echo ""
  echo ""
  echo "This wizard creates the following basic files and folders structure for a given component name and device"
  echo ""
  echo "  - Component"
  echo "    src/components/\${device}/\${componentName}"
  echo "      |"
  echo "      |-- src/components/\${device}/\${componentName}/index.js"
  echo "      |"
  echo "      --- src/components/\${device}/\${componentName}/\${componentName}.js"
  echo ""
  echo "  - Test"
  echo "    src/test/unit/\${componentName}"
  echo "      |"
  echo "      --- src/test/unit/\${componentName}/\${componentName}.spec.js"
  echo ""
  echo "  - Storybook"
  echo "      src/.storybook/components/\${componentName}.stories.js"
  echo ""
  echo "  - Docs"
  echo "      src/docs/components/\${componentName}.mdx"
  echo ""
  echo ""


  echo "To begin, please provide a component name (the name must be in camelCase)"

  read -p "Component name: " componentName
  echo "For wich device your component will be used?"
  echo "1) Web"
  echo "2) Mobile"
  echo "3) Quit"
  read n
  valid_option=false
  while ${!valid_option}; do
    case $n in
      "1")
        device="web"
        echo "device: ${device}"
        valid_option=true
        break
        ;;
      "2")
        device="Mobile"
        echo "device: ${device}"
        valid_option=true
        break
        ;;
      "3")
        echo "Bye!"
        valid_option=true
        break
        ;;
      *)
        echo "Invalid option. Please try again";
        read n
        ;;
    esac
  done


  #################################
  ########### Component ###########
  #################################

  if [ -d "src/components/${device}/${componentName,,}" ]
  then
    echo "Component already exits"
  else
    echo "Creating component file"
    mkdir src/components/${device}/${componentName,,}
    echo "export { default } from './${componentName^}';" > src/components/${device}/${componentName,,}/index.js

    echo "import React from 'react';
    import styled from 'styled-components';
    import PropTypes from 'prop-types';

    /**
    * @render react
    * @name ${componentName^}
    * @description ${componentName^} Component for Wenance
    */

    const ${componentName^} = props => {
      const { children, ...rest } = props;
      const Component = Styled${componentName^};
      return <Component {...rest}>{children}</Component>;
    };

    const Styled${componentName^} = styled.div\`
      display: block;
    \`;

    Styled${componentName^}.propTypes = {
      children: PropTypes.node.isRequired
    };

    export default ${componentName^};
    " > src/components/${device}/${componentName,,}/${componentName^}.js



    ############################
    ########### Test ###########
    ############################
    echo "Creating test file"
    mkdir src/test/unit/${componentName^}
    echo "import React from 'react';
    import ${componentName^} from '../../../components/${device}/${componentName,,}';
    import renderer from 'react-test-renderer';
    import { mountWithTheme } from '../../../../utils/helper';
    import welp_ar from '../../../branding/brands/welp_ar';
    import { ThemeProvider } from 'styled-components';
    import 'jest-styled-components';

    describe('${componentName^} component', () => {
      it('should render snapshot', () => {
        const component = renderer.create(
          <ThemeProvider theme={welp_ar.theme}>
            <${componentName^} className='test-${componentName}'>${componentName^} container</${componentName^}>
          </ThemeProvider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    " > src/test/unit/${componentName^}/${componentName^}.spec.js



    #################################
    ########### StoryBook ###########
    #################################
    echo "Creating Storybook file"
    echo "import React from 'react';
    import { storiesOf } from '@storybook/react';
    import { withKnobs, text, boolean } from '@storybook/addon-knobs';

    import ${componentName^} from '../../components/${device}/${componentName,,}';

    const getData = (func, label, textVal) => func(label, textVal);

    storiesOf('${componentName^}', module)
      .addDecorator(withKnobs)
      .add('with default props', () => (
        <${componentName^}>{getData(text, 'texts', 'This is a form container')}</${componentName^}>
      ));
    " > src/.storybook/components/${componentName^}.stories.js



    #################################
    ###########   Docs    ###########
    #################################
    echo "Creating docs file"
    echo "---
    name: ${componentName^}
    menu: Components
    route: /${componentName,,}
    ---

    import { Playground, PropsTable } from 'docz';
    import { Fragment } from 'react';
    import ${componentName^} from '../../components/${device}/${componentName,,}';
    import Input from '../../components/${device}/input';
    import { ThemeProvider } from 'styled-components';
    import welp_ar from '../../branding/brands/welp_ar';
    import GlobalStyle from '../../components/${device}/globalstyle';
    import { styles } from '../../../utils/docz';

    # ${componentName^}

    <PropsTable of={${componentName^}} />

    ## Basic usage

    <Playground>
      <ThemeProvider theme={welp_ar.theme}>
        <>
          <GlobalStyle theme={welp_ar.theme} />
          <${componentName^}>
            <Input
              label='Ingrese su celular'
              name='validationcellphone'
              descriptionBottom
              type='number'
              prefix='15'
              description='Sin el 0 y 15'
              placeholder='42424242'
              data='ingrese-celular'
            />
          </${componentName^}>
        </>
      </ThemeProvider>
    </Playground>

    [Try it on Storybook!](./storybook/index.html?path=/story/${componentName^}--with-default-props)
    " > src/docs/components/${componentName^}.mdx
    
    #TODO edit Readme

    echo "Component ${componentName^} created"
    echo "Please remember to edit README.md in order to add your component"
  fi
  echo "Bye!"
else
  echo "cannot use script with your bash version."
  echo "version 4 o newest is needed"
fi
