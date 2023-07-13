import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"
import { ButtonGroup, Flex, IconButton, useEditableControls } from "@chakra-ui/react"
export default function EditableControls() {

    const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'>
            <IconButton
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                aria-label='CheckIcon'
                icon={<CheckIcon />}
                {...getSubmitButtonProps()}
            />
            <IconButton bg="transparent" _hover={{ bg: 'transparent' }} aria-label='CloseIcon' icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
    ) : (
        <Flex ml='auto'>
            <IconButton bg="transparent" _hover={{ bg: 'transparent' }} aria-label='EditIcon' size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
    )
}