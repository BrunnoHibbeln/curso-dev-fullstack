import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import {
	Card,
	CardHeader,
	CardActions,
	Avatar,
	IconButton
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles(() => ({
	root: {
		maxWidth: 345,
	},
}))

const CustomerCard = ({
	name,
	lastname,
	email,
	avatar,
	className,
}) => {
	const classes = useStyles()
	const [openModal, setOpenModal] = useState(false)

	const handleToggleOpenModal = () => {
		setOpenModal(!openModal)
	}
	const handleConfirmModal = () => {
		alert('ok')
	}
	const handleRemoveCustomer = () => {
		handleToggleOpenModal()
	}

	return (
		<>
			<Card className={classNames(className, classes.root)}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" src={avatar}>
							R
						</Avatar>
					}
					title={`${name} ${lastname}`}
					subheader={email}
					/>
				<CardActions disableSpacing>
					<IconButton aria-label="Editar">
						<EditIcon />
					</IconButton>
					<IconButton aria-label="Remover" onClick={ handleRemoveCustomer }>
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</Card>
			<ModalConfirm
				open={ openModal }
				onClose={ handleToggleOpenModal }
				onConfirm={ handleConfirmModal }
				title="Do you really want to delete?"
				message="Once confirmed, it will not be possible to revert."
			/>
		</>
	)
}

export default CustomerCard
