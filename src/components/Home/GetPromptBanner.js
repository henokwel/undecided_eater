
import { Button , SIZE} from 'baseui/button'
import { Layer } from 'baseui/layer'
import { Wrapper } from '../utils/PromptWrapper'


export const GetPromptBanner = ({ locationRequirePromt, handleLocation }) => {
  return (

    // Launch Prompt and require Location accese

    locationRequirePromt ?

      <Layer>
        < Wrapper >
          <Button
            onClick={() => handleLocation()}
            $style={{
              color: "#0054A9",
              fontWeight: "600",
              marginBottom: "12px",
              minWidth: "251px",
            }}
            size={SIZE.large}>
            I Understand
          </Button>
        </Wrapper >
      </Layer >
      :
      <></>


  )
}
