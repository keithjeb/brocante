// eslint-disable
// this is an auto generated file. This will be overwritten

export const createSeller = `mutation CreateSeller($input: CreateSellerInput!) {
  createSeller(input: $input) {
    id
    name
    allocator {
      id
      name
      sellers {
        nextToken
      }
      location
      address
    }
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const updateSeller = `mutation UpdateSeller($input: UpdateSellerInput!) {
  updateSeller(input: $input) {
    id
    name
    allocator {
      id
      name
      sellers {
        nextToken
      }
      location
      address
    }
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const deleteSeller = `mutation DeleteSeller($input: DeleteSellerInput!) {
  deleteSeller(input: $input) {
    id
    name
    allocator {
      id
      name
      sellers {
        nextToken
      }
      location
      address
    }
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const createAllocator = `mutation CreateAllocator($input: CreateAllocatorInput!) {
  createAllocator(input: $input) {
    id
    name
    sellers {
      items {
        id
        name
      }
      nextToken
    }
    location
    address
  }
}
`;
export const updateAllocator = `mutation UpdateAllocator($input: UpdateAllocatorInput!) {
  updateAllocator(input: $input) {
    id
    name
    sellers {
      items {
        id
        name
      }
      nextToken
    }
    location
    address
  }
}
`;
export const deleteAllocator = `mutation DeleteAllocator($input: DeleteAllocatorInput!) {
  deleteAllocator(input: $input) {
    id
    name
    sellers {
      items {
        id
        name
      }
      nextToken
    }
    location
    address
  }
}
`;
export const createItem = `mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
    id
    itemType {
      id
      desc
      items {
        nextToken
      }
    }
    sex
    description
    price
    cart {
      id
      items {
        nextToken
      }
      friendlyName
      completed
      scanner
    }
    seller {
      id
      name
      allocator {
        id
        name
        location
        address
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const updateItem = `mutation UpdateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    id
    itemType {
      id
      desc
      items {
        nextToken
      }
    }
    sex
    description
    price
    cart {
      id
      items {
        nextToken
      }
      friendlyName
      completed
      scanner
    }
    seller {
      id
      name
      allocator {
        id
        name
        location
        address
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const deleteItem = `mutation DeleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
    id
    itemType {
      id
      desc
      items {
        nextToken
      }
    }
    sex
    description
    price
    cart {
      id
      items {
        nextToken
      }
      friendlyName
      completed
      scanner
    }
    seller {
      id
      name
      allocator {
        id
        name
        location
        address
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const createItemType = `mutation CreateItemType($input: CreateItemTypeInput!) {
  createItemType(input: $input) {
    id
    desc
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const updateItemType = `mutation UpdateItemType($input: UpdateItemTypeInput!) {
  updateItemType(input: $input) {
    id
    desc
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const deleteItemType = `mutation DeleteItemType($input: DeleteItemTypeInput!) {
  deleteItemType(input: $input) {
    id
    desc
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const createCart = `mutation CreateCart($input: CreateCartInput!) {
  createCart(input: $input) {
    id
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
    friendlyName
    completed
    scanner
  }
}
`;
export const updateCart = `mutation UpdateCart($input: UpdateCartInput!) {
  updateCart(input: $input) {
    id
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
    friendlyName
    completed
    scanner
  }
}
`;
export const deleteCart = `mutation DeleteCart($input: DeleteCartInput!) {
  deleteCart(input: $input) {
    id
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
    friendlyName
    completed
    scanner
  }
}
`;
export const createContent = `mutation CreateContent($input: CreateContentInput!) {
  createContent(input: $input) {
    id
    placement
    content
    createdAt
    updatedAt
    author
  }
}
`;
export const updateContent = `mutation UpdateContent($input: UpdateContentInput!) {
  updateContent(input: $input) {
    id
    placement
    content
    createdAt
    updatedAt
    author
  }
}
`;
export const deleteContent = `mutation DeleteContent($input: DeleteContentInput!) {
  deleteContent(input: $input) {
    id
    placement
    content
    createdAt
    updatedAt
    author
  }
}
`;
