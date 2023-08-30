
class UpdateDto {
    date?: string
    amount?: number
    currency?: string
    description?: string
}

export class WebhookDto {
    transaction: string
    update: UpdateDto
}